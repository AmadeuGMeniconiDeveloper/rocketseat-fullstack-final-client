import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Label from "@/components/Label";
import InputText from "@/components/InputText";
import TextArea from "@/components/TextArea";
import InputFile from "@/components/InputFile";
import InputTags from "@/components/InputTags";
import Select from "@/components/InputSelect";

import { Container } from "./styled";

import { Food } from "@/types/api";

import { CaretLeft } from "@phosphor-icons/react";
import { api } from "@/config/api";

function FoodNew() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState<Food["category"]>("Refeicao");

  const navigate = useNavigate();

  const categories: Food["category"][] = ["Refeicao", "Bebida", "Sobremesa"];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/products", {
        name,
        description,
        price,
        ingredients,
        category,
      });

      await api.post(
        `/products/${data.newProductId}/images`,
        {
          image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Criado com sucesso!");
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Button variant="ghost" onClick={() => navigate("/home")}>
        <CaretLeft size={24} />
        Voltar
      </Button>
      <form
        id="new-food"
        onSubmit={e => handleSubmit(e)}
        encType="multipart/form-data"
      >
        <h1>Novo Prato</h1>
        <Label>
          Imagem do prato
          <InputFile
            selectedFile={image}
            setSelectedFile={setImage}
            placeholder="Selecione uma imagem"
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
      <Button variant="primary" type="submit" form="new-food">
        Adicionar
      </Button>
    </Container>
  );
}

export default FoodNew;
