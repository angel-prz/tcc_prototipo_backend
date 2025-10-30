import axiosClient from '../src/utils/axios-client';

export async function autenticar(email, senha) {
  try {
    const response = await axiosClient.post("/login", { email, password: senha });
    return {
      sucesso: true,
      mensagem: "Login bem-sucedido!",
      dados: response.data,
    };
  } catch (error) {
    return {
      sucesso: false,
      mensagem: error?.response?.data?.message || "Erro ao tentar logar",
    };
  }
}

