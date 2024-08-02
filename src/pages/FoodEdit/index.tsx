import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@/components/Button";
import Label from "@/components/Label";
import InputText from "@/components/InputText";
import TextArea from "@/components/TextArea";
import InputFile from "@/components/InputFile";
import InputTags from "@/components/InputTags";
import Select from "@/components/InputSelect";

import { ButtonGroup, Container } from "./styled";

import { Food } from "@/types/api";

import { CaretLeft } from "@phosphor-icons/react";
import { api } from "@/config/api";

function FoodEdit() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState<Food["category"]>("Refeicao");

  const { id } = useParams();

  const navigate = useNavigate();

  const categories: Food["category"][] = ["Refeicao", "Bebida", "Sobremesa"];

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.patch(`/products/${id}`, {
        name,
        description,
        price,
        ingredients,
        category,
      });

      await api.post(
        `/products/${id}/images`,
        {
          image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Atualizado com sucesso!");
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/products/${id}`);
      alert("Prato deletado com sucesso!");
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const fetchFood = async () => {
      const response = await api.get(`/products/${id}`);

      setName(response.data.name);
      setCategory(response.data.category);
      setIngredients(response.data.ingredients);
      setDescription(response.data.description);
      setPrice(response.data.price);
    };

    fetchFood();
  }, [id]);

  return (
    <Container>
      <Button variant="ghost" onClick={() => navigate("/home")}>
        <CaretLeft size={24} />
        Voltar
      </Button>
      <form id="edit-food" onSubmit={e => handleSave(e)}>
        <h1>Editar Prato</h1>
        <Label>
          Imagem do prato
          <InputFile
            selectedFile={image}
            setSelectedFile={setImage}
            placeholder="Selecione imagem para alterar"
          />
        </Label>
        <Label>
          Nome
          <InputText
            placeholder="Salada Ceasar"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </Label>
        <Label>
          Categoria
          <Select
            value={category}
            onChange={e => setCategory(e.target.value as Food["category"])}
            options={categories}
            required
          />
        </Label>
        <Label>
          Ingredientes
          <InputTags tags={ingredients} setTags={setIngredients} />
        </Label>
        <Label>
          Preco
          <InputText
            placeholder="R$ 0.00"
            onChange={e => setPrice(e.target.value)}
            value={price}
            type="number"
            min={0}
            step={0.01}
            maxLength={4}
            required
          />
        </Label>
        <Label>
          Descricao
          <TextArea
            rows={4}
            placeholder="Frite o alcatra e misture com o hambuerguer de carne"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </Label>
      </form>
      <ButtonGroup>
        <Button name="delete" variant="secondary" onClick={handleDelete}>
          Excluir
        </Button>
        <Button name="save" variant="primary" type="submit" form="edit-food">
          Salvar
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default FoodEdit;
