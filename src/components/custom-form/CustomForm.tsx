import './CustomForm.css';

interface Props {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title?: string; 
}

const CustomForm = ({ children, onSubmit, title }: Props) => {
  return (
    <div className="custom-form-container">
      {title && <h1 className='custom-form-title'>{title}</h1>}
      <form className="custom-form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default CustomForm;