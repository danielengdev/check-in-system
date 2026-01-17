# 🎟️ Sistema de Check-in para Eventos (Angular 21)

Aplicação frontend para **gerenciamento de check-in em eventos**, utilizando **QR Code implementado do zero**, simulando cenários reais de conferências, cursos e workshops.

> 🚨 **Importante**  
> Nesta versão, o QR Code é gerado manualmente no frontend usando apenas uma biblioteca JavaScript base (`qrcode`), **sem componentes Angular prontos**.

---

## 🧩 Visão Geral do Produto

### 👥 Perfis
- **Admin**: gerencia evento e participantes
- **Staff**: realiza check-in

### 🔄 Fluxo Principal
1. Admin cadastra participantes
2. Sistema gera QR Code único (frontend)
3. Staff lê o código e realiza check-in
4. Dashboard reflete status em tempo real

---

## 🏗️ Arquitetura Angular

- Angular **21**
- Standalone Components
- Gerenciamento de estado com **Signals**
- Lazy Loading por feature
- Guards modernos (`CanMatch`)


---

## ✨ Funcionalidades

### 📷 QR Code (Implementado do Zero)
- Geração de QR Code no navegador
- Biblioteca base: **qrcode (JavaScript puro)**
- Payload estruturado
- QR gerado como imagem Base64
- Nenhuma dependência Angular específica

### 👥 Participantes
- Cadastro de participantes
- Identificador único
- Status de check-in

### ✅ Check-in
- Leitura do conteúdo do QR Code
- Validação do payload
- Prevenção de check-in duplicado

### 📊 Dashboard
- Total de participantes
- Total de check-ins
- Atualização reativa em tempo real

---

## 🧠 Gerenciamento de Estado

- Abordagem: **Signals**
- Store global: `EventStore`
- Sem NgRx
- Alta legibilidade e testabilidade
- Reatividade nativa do Angular

---

## 🔐 Segurança

### Roles
- `ADMIN`
- `STAFF`

### Guards
- `CanMatch`

### Payload do QR Code
```json
{
  "participantId": "uuid",
  "generatedAt": 1730000000000
}
