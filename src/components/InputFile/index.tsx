import { File, Trash, Upload } from "@phosphor-icons/react";
import Button from "../Button";
import { Container } from "./styled";
import {
  ChangeEvent,
  ComponentProps,
  MouseEvent,
  useRef,
  useState,
} from "react";

interface InputFileProps {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

function InputFile({
  selectedFile,
  setSelectedFile,
  ...props
}: InputFileProps & ComponentProps<"input">) {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleChooseFile = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleRemoveFile = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSelectedFile(null);
  };

  return (
    <Container>
      <input ref={inputRef} onChange={handleOnChange} type="file" {...props} />
      <Button variant="ghost" onClick={e => handleChooseFile(e)}>
        {selectedFile ? <File size={24} /> : <Upload size={24} />}
        {/* #DO: Trucate file name display */}
        {selectedFile ? selectedFile.name : props.placeholder}
      </Button>
      {selectedFile && (
        <Button variant="ghost" onClick={e => handleRemoveFile(e)}>
          <Trash size={24} color="#E73F5D" />
        </Button>
      )}
    </Container>
  );
}

export default InputFile;
