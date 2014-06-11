var logic = require('./logic');

exports.get=function(req,res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.end(
		logic.page('Exponente',logic.navbar(),
			[
				(!isNaN(req.a))?
				('<p>{a} Dividido {b}={sq}</p>')
					.replace('{a}',req.a)
					.replace('{b}',req.b)
					.replace('{sq}',(req.a/req.b)):'',
				'<p>Ingrese un número para calcular</p>',
				'<form name="squared" action="/squared" method="get">',
				'A: <input type="text" name="a"/>',
				'B: <input type="text" name="b"/>',
				'<input type="submit" name ="enviar"/>',
				'</form>'
			].join('\n')
		)
	);
}