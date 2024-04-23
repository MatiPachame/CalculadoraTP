import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

export const routes: Routes = [{path:"**",component:CalculadoraComponent}];
