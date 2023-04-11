$(document).ready(function() {
	var cantidadParticipantes = 1;

	$('#agregar-participante').click(function() {
		cantidadParticipantes++;

		var html = '<label for="participante-' + cantidadParticipantes + '">Participante ' + cantidadParticipantes + ':</label>';
		html += '<input type="text" id="participante-' + cantidadParticipantes + '" name="participante-' + cantidadParticipantes + '"><br>';

		$('#participantes').append(html);
	});

	$('#calcular').click(function() {
		var nombre = $('#nombre').val();
		var gasto = parseFloat($('#gasto').val());

		var totalParticipantes = cantidadParticipantes + 1; // incluir al usuario en la división

		var total = gasto / totalParticipantes;

		var respuesta = nombre + ' debe pagar ' + total.toFixed(2) + ' pesos.';

		for (var i = 1; i <= cantidadParticipantes; i++) {
			var participante = $('#participante-' + i).val();
			respuesta += '<br>' + participante + ' debe pagar ' + total.toFixed(2) + ' pesos.';
		}

		$('#respuesta').html(respuesta);
	});
});
