id:"MAT111",
codigo:"MAT111",
nombre:"Anatomía",
anio:1,
semestre:1,
creditos:6,
area:"Ciencias Básicas",
prerequisitos:[]
},

{
id:"MAT112",
codigo:"MAT112",
nombre:"Química General y Orgánica",
anio:1,
semestre:1,
creditos:3,
area:"Ciencias Básicas",
prerequisitos:[]
},

{
id:"MAT113",
codigo:"MAT113",
nombre:"Biología",
anio:1,
semestre:1,
creditos:4,
area:"Ciencias Básicas",
prerequisitos:[]
},

{
id:"MAT114",
codigo:"MAT114",
nombre:"Histología",
anio:1,
semestre:1,
creditos:3,
area:"Ciencias Básicas",
prerequisitos:[]
},

{
id:"MAT115",
codigo:"MAT115",
nombre:"Psicología General",
anio:1,
semestre:1,
creditos:4,
area:"Formación General",
prerequisitos:[]
},

{
id:"MAT116",
codigo:"MAT116",
nombre:"Introducción a la Matronería",
anio:1,
semestre:1,
creditos:6,
area:"Obstetricia",
prerequisitos:[]
},

{
id:"MAT117",
codigo:"MAT117",
nombre:"Autorregulación",
anio:1,
semestre:1,
creditos:2,
area:"Formación General",
prerequisitos:[]
},

{
id:"MAT118",
codigo:"MAT118",
nombre:"Lenguaje y Comunicación",
anio:1,
semestre:1,
creditos:2,
area:"Formación General",
prerequisitos:[]
},

{
id:"MAT121",
codigo:"MAT121",
nombre:"Embriología",
anio:1,
semestre:2,
creditos:3,
area:"Ciencias Básicas",
prerequisitos:["MAT111","MAT113"]
},

{
id:"MAT122",
codigo:"MAT122",
nombre:"Bioquímica",
anio:1,
semestre:2,
creditos:3,
area:"Ciencias Básicas",
prerequisitos:["MAT112"]
},

{
id:"MAT123",
codigo:"MAT123",
nombre:"Microbiología",
anio:1,
semestre:2,
creditos:4,
area:"Ciencias Básicas",
prerequisitos:["MAT113","MAT114"]
},

{
id:"MAT124",
codigo:"MAT124",
nombre:"Fisiología",
anio:1,
semestre:2,
creditos:6,
area:"Ciencias Básicas",
prerequisitos:["MAT111","MAT113","MAT114"]
},

{
id:"MAT125",
codigo:"MAT125",
nombre:"Atención a la Matronería I",
anio:1,
semestre:2,
creditos:5,
area:"Obstetricia",
prerequisitos:["MAT111","MAT113","MAT116"]
},

{
id:"MAT126",
codigo:"MAT126",
nombre:"Matemática Aplicada en Salud",
anio:1,
semestre:2,
creditos:2,
area:"Formación General",
prerequisitos:[]
},

{
id:"MAT127",
codigo:"MAT127",
nombre:"Inglés I",
anio:1,
semestre:2,
creditos:2,
area:"Formación General",
prerequisitos:[]
},

{
id:"MAT128",
codigo:"MAT128",
nombre:"Educación en Salud e Interculturalidad",
anio:1,
semestre:2,
creditos:5,
area:"Salud Pública",
prerequisitos:[]
}
/* ===========================
   SEGUNDO AÑO
=========================== */

{
id:"MAT211",
codigo:"MAT211",
nombre:"Fisiopatología",
anio:2,
semestre:3,
creditos:6,
area:"Ciencias Básicas",
prerequisitos:["MAT123","MAT124"]
},

{
id:"MAT212",
codigo:"MAT212",
nombre:"Salud Fetal y Neonatal I",
anio:2,
semestre:3,
creditos:3,
area:"Neonatología",
prerequisitos:["MAT121","MAT124"]
},

{
id:"MAT213",
codigo:"MAT213",
nombre:"Salud Ginecológica I",
anio:2,
semestre:3,
creditos:3,
area:"Ginecología",
prerequisitos:["MAT121","MAT124"]
},

{
id:"MAT214",
codigo:"MAT214",
nombre:"Salud Obstétrica I",
anio:2,
semestre:3,
creditos:4,
area:"Obstetricia",
prerequisitos:["MAT121","MAT124"]
},

{
id:"MAT215",
codigo:"MAT215",
nombre:"Atención de Matronería II",
anio:2,
semestre:3,
creditos:4,
area:"Obstetricia",
prerequisitos:["MAT124","MAT125"]
},

{
id:"MAT216",
codigo:"MAT216",
nombre:"Farmacología Aplicada",
anio:2,
semestre:3,
creditos:4,
area:"Ciencias Básicas",
prerequisitos:["MAT122","MAT124"]
},

{
id:"MAT217",
codigo:"MAT217",
nombre:"Salud Pública",
anio:2,
semestre:3,
creditos:4,
area:"Salud Pública",
prerequisitos:["MAT126","MAT128"]
},

{
id:"MAT218",
codigo:"MAT218",
nombre:"Inglés II",
anio:2,
semestre:3,
creditos:2,
area:"Formación General",
prerequisitos:["MAT127"]
},

{
id:"MAT221",
codigo:"MAT221",
nombre:"Salud Familiar y Comunitaria",
anio:2,
semestre:4,
creditos:4,
area:"Salud Pública",
prerequisitos:["MAT213","MAT214"]
},

{
id:"MAT222",
codigo:"MAT222",
nombre:"Salud Fetal y Neonatal II",
anio:2,
semestre:4,
creditos:6,
area:"Neonatología",
prerequisitos:["MAT211","MAT212","MAT216"]
},

{
id:"MAT223",
codigo:"MAT223",
nombre:"Salud Ginecológica II",
anio:2,
semestre:4,
creditos:4,
area:"Ginecología",
prerequisitos:["MAT211","MAT213","MAT216"]
},

{
id:"MAT224",
codigo:"MAT224",
nombre:"Salud Obstétrica II",
anio:2,
semestre:4,
creditos:4,
area:"Obstetricia",
prerequisitos:["MAT211","MAT214","MAT216"]
},

{
id:"MAT225",
codigo:"MAT225",
nombre:"Atención de Matronería III",
anio:2,
semestre:4,
creditos:4,
area:"Obstetricia",
prerequisitos:["MAT215","MAT216"]
},

{
id:"MAT226",
codigo:"MAT226",
nombre:"Módulo Práctico Obstétrico",
anio:2,
semestre:4,
creditos:0,
area:"Práctica Clínica",
prerequisitos:["MAT212","MAT214","MAT215"]
},

{
id:"MAT227",
codigo:"MAT227",
nombre:"Sexualidad y Afectividad",
anio:2,
semestre:4,
creditos:4,
area:"Salud Sexual",
prerequisitos:["MAT211","MAT213"]
},

{
id:"MAT228",
codigo:"MAT228",
nombre:"Bioestadística para el Diseño de Investigación",
anio:2,
semestre:4,
creditos:2,
area:"Investigación",
prerequisitos:["MAT217","MAT218"]
},
/* ===========================
   TERCER AÑO
=========================== */

{
id:"MAT311",
codigo:"MAT311",
nombre:"Salud Familiar Aplicada I",
anio:3,
semestre:5,
creditos:4,
area:"Salud Pública",
prerequisitos:["MAT221","MAT223","MAT224"]
},

{
id:"MAT312",
codigo:"MAT312",
nombre:"Salud Neonatal Aplicada I",
anio:3,
semestre:5,
creditos:4,
area:"Neonatología",
prerequisitos:["MAT222","MAT225"]
},

{
id:"MAT313",
codigo:"MAT313",
nombre:"Salud Ginecológica Aplicada I",
anio:3,
semestre:5,
creditos:3,
area:"Ginecología",
prerequisitos:["MAT223","MAT227"]
},

{
id:"MAT314",
codigo:"MAT314",
nombre:"Salud Obstétrica Aplicada I",
anio:3,
semestre:5,
creditos:2,
area:"Obstetricia",
prerequisitos:["MAT224","MAT225"]
},

{
id:"MAT315",
codigo:"MAT315",
nombre:"Módulo Práctico Integrado I",
anio:3,
semestre:5,
creditos:6,
area:"Práctica Clínica",
prerequisitos:["MAT224","MAT225","MAT226"]
},

{
id:"MAT316",
codigo:"MAT316",
nombre:"Gerontología",
anio:3,
semestre:5,
creditos:2,
area:"Salud Familiar",
prerequisitos:["MAT223","MAT225"]
},

{
id:"MAT317",
codigo:"MAT317",
nombre:"Metodología de la Investigación I",
anio:3,
semestre:5,
creditos:6,
area:"Investigación",
prerequisitos:["MAT228"]
},

{
id:"MAT318",
codigo:"MAT318",
nombre:"TIPE I",
anio:3,
semestre:5,
creditos:4,
area:"Integración",
prerequisitos:["MAT221","MAT223","MAT227"]
},

{
id:"MAT321",
codigo:"MAT321",
nombre:"Salud Familiar Aplicada II",
anio:3,
semestre:6,
creditos:4,
area:"Salud Pública",
prerequisitos:["MAT311"]
},

{
id:"MAT322",
codigo:"MAT322",
nombre:"Salud Neonatal Aplicada II",
anio:3,
semestre:6,
creditos:4,
area:"Neonatología",
prerequisitos:["MAT312"]
},

{
id:"MAT323",
codigo:"MAT323",
nombre:"Salud Ginecológica Aplicada II",
anio:3,
semestre:6,
creditos:2,
area:"Ginecología",
prerequisitos:["MAT313"]
},

{
id:"MAT324",
codigo:"MAT324",
nombre:"Salud Obstétrica Aplicada II",
anio:3,
semestre:6,
creditos:2,
area:"Obstetricia",
prerequisitos:["MAT314"]
},

{
id:"MAT325",
codigo:"MAT325",
nombre:"Módulo Práctico Integrado I",
anio:3,
semestre:6,
creditos:6,
area:"Práctica Clínica",
prerequisitos:["MAT315"]
},

{
id:"MAT326",
codigo:"MAT326",
nombre:"Metodología de la Investigación II",
anio:3,
semestre:6,
creditos:3,
area:"Investigación",
prerequisitos:["MAT317"]
},

{
id:"MAT327",
codigo:"MAT327",
nombre:"Gerenciamiento y Liderazgo I",
anio:3,
semestre:6,
creditos:6,
area:"Gestión",
prerequisitos:["MAT117","MAT218"]
},
# 4.º Año

## 7.º Semestre

### MAT 411 – Salud Familiar Integrada I
- **Créditos:** 3
- **Requisitos:**
  - MAT 321 – Salud Familiar Aplicada II
  - MAT 323 – Salud Ginecológica Aplicada II

### MAT 412 – Salud Neonatal Integrada I
- **Créditos:** 4
- **Requisitos:**
  - MAT 322 – Salud Neonatal Aplicada II

### MAT 413 – Salud Gineco-Obstétrica Integrada I
- **Créditos:** 4
- **Requisitos:**
  - MAT 323 – Salud Ginecológica Aplicada II
  - MAT 324 – Salud Obstétrica Aplicada II

### MAT 414 – Módulo Práctico Integrado II
- **Créditos:** 12
- **Requisitos:**
  - MAT 321 – Salud Familiar Aplicada II
  - MAT 322 – Salud Neonatal Aplicada II
  - MAT 323 – Salud Ginecológica Aplicada II
  - MAT 325 – Módulo Práctico Integrado I

### MAT 415 – Seminario de Tesis I
- **Créditos:** 3
- **Requisitos:**
  - MAT 326 – Metodología de la Investigación II

### MAT 416 – Gerenciamiento y Liderazgo II
- **Créditos:** 4
- **Requisitos:**
  - MAT 327 – Gerenciamiento y Liderazgo I

---

## 8.º Semestre

### MAT 421 – Salud Familiar Integrada II
- **Créditos:** 3
- **Requisitos:**
  - MAT 411 – Salud Familiar Integrada I

### MAT 422 – Salud Neonatal Integrada II
- **Créditos:** 4
- **Requisitos:**
  - MAT 412 – Salud Neonatal Integrada I

### MAT 423 – Salud Gineco-Obstétrica Integrada II
- **Créditos:** 4
- **Requisitos:**
  - MAT 413 – Salud Gineco-Obstétrica Integrada I

### MAT 424 – Módulo Práctico Integrado III
- **Créditos:** 12
- **Requisitos:**
  - MAT 321 – Salud Familiar Aplicada II
  - MAT 322 – Salud Neonatal Aplicada II
  - MAT 323 – Salud Ginecológica Aplicada II
  - MAT 325 – Módulo Práctico Integrado I

### MAT 425 – Seminario de Tesis II
- **Créditos:** 3
- **Requisitos:**
  - MAT 415 – Seminario de Tesis I

### MAT 426 – TIPE II
- **Créditos:** 4
- **Requisitos:**
  - MAT 318 – TIPE I
  - MAT 416 – Gerenciamiento y Liderazgo II
