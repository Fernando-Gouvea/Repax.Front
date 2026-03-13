import { useState } from "react";
//import { toast } from "sonner";
import { UserPlus, Mail, Phone } from "lucide-react";
import styled from "styled-components";
import type { Usuario } from "../../types/tipos";
import { usuariosMock } from "../../dados/mockDados";
import { Dialog, DialogHeader, DialogTitle } from "../../components/ui/Dialog";

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 0.25rem;
`;

const AccentBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.gradients.accent};
  color: ${({ theme }) => theme.colors.accentForeground};
  font-weight: 600;
  font-size: 0.875rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const UserCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.5rem;
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-weight: 700;
  font-size: 1.125rem;
`;

const StatusTag = styled.span<{ $active: boolean }>`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: ${({ $active }) =>
    $active ? "hsla(152, 60%, 42%, 0.1)" : "hsla(0, 72%, 51%, 0.1)"};
  color: ${({ $active }) =>
    $active ? "hsl(152, 60%, 42%)" : "hsl(0, 72%, 51%)"};
`;

const UserName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.foreground};
`;

const UserRole = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const ContactList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.input};
  background: ${({ theme }) => theme.colors.card};
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.input};
  background: ${({ theme }) => theme.colors.card};
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }
`;

const BtnRow = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.5rem;
`;

const SubmitBtn = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.gradients.accent};
  color: ${({ theme }) => theme.colors.accentForeground};
  font-weight: 600;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

const CancelBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.foreground};
  &:hover {
    background: ${({ theme }) => theme.colors.muted};
  }
`;

export default function PaginaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosMock);
  const [dialogAberto, setDialogAberto] = useState(false);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "vendedor" as "admin" | "vendedor",
  });

  const handleCadastrar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoUsuario.nome || !novoUsuario.email) {
      //toast.error("Preencha os campos obrigatórios");
      return;
    }
    const novo: Usuario = {
      id: String(Date.now()),
      ...novoUsuario,
      ativo: true,
      criadoEm: new Date().toISOString(),
    };
    setUsuarios((prev) => [...prev, novo]);
    setNovoUsuario({ nome: "", email: "", telefone: "", cargo: "vendedor" });
    setDialogAberto(false);
    //toast.success("Usuário cadastrado com sucesso!");
  };

  return (
    <div>
      <HeaderRow>
        <div>
          <Title>Usuários</Title>
          <Subtitle>Gerencie os usuários do sistema</Subtitle>
        </div>
        <AccentBtn onClick={() => setDialogAberto(true)}>
          <UserPlus size={16} /> Novo Usuário
        </AccentBtn>
      </HeaderRow>

      <Dialog open={dialogAberto} onOpenChange={setDialogAberto}>
        <DialogHeader>
          <DialogTitle>Cadastrar Usuário</DialogTitle>
        </DialogHeader>
        <FormFields onSubmit={handleCadastrar}>
          <FieldGroup>
            <StyledLabel>Nome *</StyledLabel>
            <StyledInput
              placeholder="Nome completo"
              value={novoUsuario.nome}
              onChange={(e) =>
                setNovoUsuario((p) => ({ ...p, nome: e.target.value }))
              }
            />
          </FieldGroup>
          <FieldGroup>
            <StyledLabel>E-mail *</StyledLabel>
            <StyledInput
              type="email"
              placeholder="email@exemplo.com"
              value={novoUsuario.email}
              onChange={(e) =>
                setNovoUsuario((p) => ({ ...p, email: e.target.value }))
              }
            />
          </FieldGroup>
          <FieldGroup>
            <StyledLabel>Telefone</StyledLabel>
            <StyledInput
              placeholder="(11) 99999-0000"
              value={novoUsuario.telefone}
              onChange={(e) =>
                setNovoUsuario((p) => ({ ...p, telefone: e.target.value }))
              }
            />
          </FieldGroup>
          <FieldGroup>
            <StyledLabel>Cargo</StyledLabel>
            <StyledSelect
              value={novoUsuario.cargo}
              onChange={(e) =>
                setNovoUsuario((p) => ({
                  ...p,
                  cargo: e.target.value as "admin" | "vendedor",
                }))
              }
            >
              <option value="admin">Administrador</option>
              <option value="vendedor">Vendedor</option>
            </StyledSelect>
          </FieldGroup>
          <BtnRow>
            <SubmitBtn type="submit">Cadastrar</SubmitBtn>
            <CancelBtn type="button" onClick={() => setDialogAberto(false)}>
              Cancelar
            </CancelBtn>
          </BtnRow>
        </FormFields>
      </Dialog>

      <Grid>
        {usuarios.map((u) => (
          <UserCard key={u.id}>
            <CardTop>
              <Avatar>{u.nome.charAt(0).toUpperCase()}</Avatar>
              <StatusTag $active={u.ativo}>
                {u.ativo ? "Ativo" : "Inativo"}
              </StatusTag>
            </CardTop>
            <UserName>{u.nome}</UserName>
            <UserRole>
              {u.cargo === "admin" ? "Administrador" : "Vendedor"}
            </UserRole>
            <ContactList>
              <ContactRow>
                <Mail size={14} /> {u.email}
              </ContactRow>
              {u.telefone && (
                <ContactRow>
                  <Phone size={14} /> {u.telefone}
                </ContactRow>
              )}
            </ContactList>
          </UserCard>
        ))}
      </Grid>
    </div>
  );
}
