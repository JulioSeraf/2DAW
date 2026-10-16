package org.example;

import laboral1.Empleado;
import laboral1.Nomina;

import java.awt.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class CalculaNominas {
    private void escribe(Empleado empl, Nomina sueldo) {
        empl.imprime();
        System.out.printf("=============================\nSueldo: %d \n\n", sueldo.sueldo(empl));
    }
    public StringBuilder readText(String ruta){
        StringBuilder linea = new StringBuilder();
        String text = "";
        try(BufferedReader bf = new BufferedReader( new FileReader(ruta))){

            while((text =  bf.readLine())!= null){
                linea.append(text).append("\n");
            }

        }catch (IOException e){
            System.out.printf("Erro ao ler texto: %s\n", e.getMessage());
        }
        return linea;
    }

    public static void main(String[] args) {
        CalculaNominas c = new CalculaNominas();
        StringBuilder t = c.readText("empleados.txt");
        System.out.print(t);
        Empleado empl1 = new Empleado("James Cosling", "32000032G", 'm', 11, 7);
        Empleado empl2 = new Empleado("Ada Lovelace", "32000031R", 'F');
        Nomina sueldo = new Nomina();
        c.escribe(empl1, sueldo);
        c.escribe(empl2, sueldo);
        empl1.setCategoria(9);
        c.escribe(empl1, sueldo);
        c.escribe(empl2, sueldo);
    }
}
