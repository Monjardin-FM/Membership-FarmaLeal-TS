type verifyResponseProps = {
  response: Response;
};

export const verifyResponse = async ({ response }: verifyResponseProps) => {
  // Verificar si la respuesta es válida
  if (!response || !response.ok)
    throw new Error("An error occurred during the call to the web service");

  // Intentamos leer el cuerpo de la respuesta como texto
  const text = await response.text();

  // Si la respuesta contiene "Token inválido", lanzamos un error con ese mensaje
  if (text.toLowerCase().includes("token inválido")) {
    throw new Error("Token inválido");
  }

  // Intentamos parsear la respuesta como JSON
  let body;
  try {
    body = JSON.parse(text);
  } catch (error) {
    // Si la respuesta no es JSON, la consideramos como un mensaje de texto
    body = { message: text };
  }

  // Verificamos si la respuesta es exitosa
  const SUCCESS_CODE = 200;
  const isSuccess = body.statusCode === SUCCESS_CODE && body.isSuccess;

  return { body };
};
