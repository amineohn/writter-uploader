import { ChangeEvent, FC, useRef } from "react";

export interface IProps {
  acceptedFileTypes?: string;
  allowMultipleFiles?: boolean;
  label: string;
  onChange: (formData: FormData) => void;
  onClick: (e: any) => void;
  uploadFileName: string;
}

export const FileInput: FC<IProps> = (props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <button type="button" onClick={onClickHandler}>
        {props.label}
      </button>
      <input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        onClick={props.onClick}
        className={'file:bg-blue-500 file:hover:bg-blue-700 file:text-white file:transition file:cursor-pointer file:font-medium file:py-2 file:px-4 file:rounded file:border-none'}
        ref={fileInputRef}
        type="file"
      />
    </form>
  );
};

FileInput.defaultProps = {
  acceptedFileTypes: '',
  allowMultipleFiles: false,
};