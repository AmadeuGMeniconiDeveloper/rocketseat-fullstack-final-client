import { MouseEvent, useState } from "react";
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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const categories: Food["category"][] = ["Refeicao", "Bebida", "Sobremesa"];

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    if (
      !name ||
      // !description ||
      !price ||
      !ingredients ||
      // !image ||
      !category
    ) {
      return alert("Todos os campos devem ser preenchidos!");
    }

    try {
      const response = await api.post("/products", {
        name,
        description,
        price: Number(price),
        ingredients,
        // image,
        category,
      });

      alert("Prato criado com sucesso!");
      navigate("/home");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      return alert("Erro ao criar prato!");
    }
  };

  return (
    <Container>
      <Button variant="ghost" onClick={() => navigate("/home")}>
        <CaretLeft size={24} />
        Voltar
      </Button>
      <h1>Novo Prato</h1>
      <Label>
        Imagem do prato
        <InputFile selectedFile={image} setSelectedFile={setImage} />
      </Label>
      <Label>
        Nome
        <InputText
          placeholder="Salada Ceasar"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </Label>
      <Label>
        Categoria
        <Select
          value={category}
          onChange={e => setCategory(e.target.value)}
          options={categories}
        />
      </Label>
      <Label>
        Ingredientes
        <InputTags tags={ingredients} setTags={setIngredients} />
      </Label>
      <Label>
        Preco
        <InputText
          placeholder="R$ 0,00"
          onChange={e => setPrice(e.target.value)}
          value={price}
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
      <Button variant="primary" onClick={handleSubmit}>
        Adicionar
      </Button>
    </Container>
  );
}

export default FoodNew;
