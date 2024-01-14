# Módulo 8 - Laboratorio 8.1 Bucles

El objetivo de estos ejercicios es que te familiarices con los bucles `for` y `while`. No implementes arrays methods; estos los veremos en el siguiente laboratorio.

## Introducción

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie de operaciones sobre una lista de pacientes.

### Set de datos inicial:

```typescript
type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  // ... (datos de ejemplo)
];
```

## Apartados obligatorios

### Apartado 1

#### a) Obtener la lista de pacientes asignados a la especialidad de Pediatría.

```typescript
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Implementación aquí
};
```

#### b) Obtener la lista de pacientes asignados a Pediatría y menores de 10 años.

```typescript
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Implementación aquí
};
```

### Apartado 2

Activar el protocolo de urgencia si algún paciente tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

```typescript
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  // Implementación aquí

  return activarProctolo;
};
```

### Apartado 3

Reasignar pacientes asignados a la especialidad de Pediatría a la de Médico de familia, ya que el pediatra no puede atender hoy.

```typescript
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Implementación aquí
};
```

### Apartado 4

Verificar si podemos mandar al pediatra a casa (si no tiene pacientes asignados).

```typescript
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Implementación aquí
};
```

## Apartados opcionales

### Apartado 5

Calcular el número total de pacientes asignados a la especialidad de Médico de familia, Pediatría y Cardiología.

```typescript
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  // Implementación aquí
};
```