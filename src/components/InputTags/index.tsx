import { X, Plus } from "@phosphor-icons/react";
import { AddTag, Container } from "./styled";
import { MouseEvent, useState } from "react";
import Button from "../Button";
import Tag from "../Tag";

interface InputTagsProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

function InputTags({ tags, setTags }: InputTagsProps) {
  const [newTag, setNewTag] = useState<string>("");

  const addTag = (tag: string, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!newTag) {
      return alert("Tag must not be empty!");
    }

    if (tags.includes(newTag)) {
      setNewTag("");
      return alert("Tag already exists!");
    }

    setTags(prev => [...prev, tag]);
    setNewTag("");
  };

  const removeTag = (targetTag: string, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTags(prev => prev.filter(tag => tag !== targetTag));
  };

  const renderTags = tags.map(tag => (
    <Tag
      key={tag}
      title={tag}
      rightIcon={<X size={16} />}
      onClick={e => removeTag(tag, e)}
    />
  ));

  return (
    <Container>
      {renderTags}
      <AddTag>
        <input
          placeholder="Adicionar"
          onChange={e => setNewTag(e.target.value)}
          value={newTag}
        />
        <Button variant="ghost" onClick={e => addTag(newTag, e)}>
          <Plus size={16} />
        </Button>
      </AddTag>
    </Container>
  );
}

export default InputTags;
