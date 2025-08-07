// loginService.test.js
import { describe, test, expect, vi } from 'vitest';
import { autenticar } from './logintest';
import axiosClient from '../src/utils/axios-client';

vi.mock('../src/utils/axios-client');

describe("Teste de autenticação", () => {
  test("Deve logar com credenciais válidas", async () => {
    axiosClient.post.mockResolvedValue({
      data: {
        token: "123abc",
        user: { email: "admin@sys.com", password: "administrador" },
      },
    });

    const resultado = await autenticar("admin@sys.com", "administrador");

    expect(resultado).toEqual({
      sucesso: true,
      mensagem: "Login bem-sucedido!",
      dados: {
        token: "123abc",
        user: { email: "admin@sys.com", password: "administrador" },
      },
    });
  });

  test("Deve falhar com senha incorreta", async () => {
    axiosClient.post.mockRejectedValue({
      response: {
        data: { message: "Credenciais inválidas" },
      },
    });

    const resultado = await autenticar("admin@sys.com", "senhaErrada");

    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toContain("inválidas");
  });
});
