package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryI;
	private final VentaRepository repositoryB;
	private final DetalleVentaRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		ProductoRepository repositoryI,
		VentaRepository repositoryB,
		DetalleVentaRepository repositoryN
		) {
		this.repositoryI = repositoryI;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Producto("Procesador", 1800.00));
this.repositoryI.save(new Producto("Placa", 1300.00));
this.repositoryI.save(new Producto("Memoria Ram", 550.00));
this.repositoryI.save(new Producto("Fuente", 580.00));
this.repositoryI.save(new Producto("Tarjeta de Video", 1600.00));

Producto computo1 = new Producto("Case", 400.00);
this.repositoryI.save(computo1);

Producto computo2 = new Producto("Impresora", 500.00);
this.repositoryI.save(computo2);

Producto computo3 = new Producto("Monitor", 700.00);
this.repositoryI.save(computo3);

Producto computo4 = new Producto("Disipador", 300.00);
this.repositoryI.save(computo4);

Venta dia1 = new Venta("Lunes");
this.repositoryB.save(dia1);

this.repositoryN.save(new DetalleVenta(dia1, computo1, 2));
this.repositoryN.save(new DetalleVenta(dia1, computo2, 1));

Venta dia2 = new Venta("Martes");
this.repositoryB.save(dia2);

this.repositoryN.save(new DetalleVenta(dia2, computo2, 3));
this.repositoryN.save(new DetalleVenta(dia2, computo3, 2));

Venta dia3 = new Venta("Miércoles");
this.repositoryB.save(dia3);

this.repositoryN.save(new DetalleVenta(dia3, computo4, 2));
this.repositoryN.save(new DetalleVenta(dia3, computo1, 1));

Venta dia4 = new Venta("Jueves");
this.repositoryB.save(dia4);

this.repositoryN.save(new DetalleVenta(dia4, computo4, 2));
this.repositoryN.save(new DetalleVenta(dia4, computo1, 1));

Venta dia5 = new Venta("Viernes");
this.repositoryB.save(dia5);

this.repositoryN.save(new DetalleVenta(dia5, computo4, 2));
this.repositoryN.save(new DetalleVenta(dia5, computo1, 1));

Venta dia6 = new Venta("Sábado");
this.repositoryB.save(dia6);

this.repositoryN.save(new DetalleVenta(dia6, computo4, 2));
this.repositoryN.save(new DetalleVenta(dia6, computo1, 1));


	}
}