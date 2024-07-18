interface FormData {
    nombre: string;
    correo: string;
    asunto: string;
    mensaje: string;
  }
  
  export const validateForm = (formData: FormData) => {
    let errors: { [key: string]: string } = {};
  
    // Validación del nombre
    if (!formData.nombre.trim()) {
      errors.nombre = "El nombre es requerido.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      errors.nombre = "El nombre solo debe contener letras.";
    } else if (formData.nombre.length > 25) {
      errors.nombre = "El nombre no debe exceder los 25 caracteres.";
    }
  
    // Validación del correo electrónico
    if (!formData.correo) {
      errors.correo = "El correo electrónico es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      errors.correo = "El correo electrónico no es válido.";
    } else if (formData.correo.length > 50 ) {
      errors.correo = "El correo electrónico no debe exceder los 50 caracteres.";
    }
  
    // Validación del asunto
    if (!formData.asunto.trim()) {
      errors.asunto = "El asunto es requerido.";
    } else if (formData.asunto.length > 50) {
      errors.asunto = "El asunto no debe exceder los 50 caracteres.";
    }
  
    // Validación del mensaje
    if (!formData.mensaje.trim()) {
      errors.mensaje = "El mensaje es requerido.";
    } else if (formData.mensaje.length < 10) {
      errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    } else if (formData.mensaje.length > 200) {
      errors.mensaje = "El mensaje no debe exceder los 200 caracteres.";
    }
  
    return errors;
  };  
  
  
  