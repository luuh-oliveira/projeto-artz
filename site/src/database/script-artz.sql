create database db_artz;
use db_artz;

create table estilo (
	idEstilo int primary key auto_increment,
    nome varchar(45) 
);

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(50),
    email varchar(50),
    senha varchar(50),
    fkEstilo int,
    constraint fkEstilo foreign key (fkEstilo) references estilo(idEstilo)
);

create table secao (
	idSecao int primary key auto_increment,
    nome varchar(45)
);

create table comentario (
	idComentario int primary key auto_increment,
    fkUsuario int,
    fkSecao int,
    comentario text
);

insert into estilo values 
	(null, 'Aquarela');
    
insert into estilo values 
	(null, 'Arte digital'),
	(null, 'Caricatura'),
	(null, 'Cartoon'),
	(null, 'Doodle art'),
	(null, 'Mangá'),
	(null, 'Natureza morta'),
	(null, 'Paisagismo'),
	(null, 'Pintura em giz/lápis de cor'),
	(null, 'Pintura a óleo'),
	(null, 'Realismo'),
	(null, 'Semi realismo');

insert into secao values
	(null, 'Anatomia'),
	(null, 'Paisagem'),
	(null, 'Personagens'),
	(null, 'Realismo'),
	(null, 'Traço e textura'),
	(null, 'Dicas'),
	(null, 'Materiais'),
	(null, 'Teoria das cores'),
	(null, 'Aquarela'),
	(null, 'Pintura a óleo'),
	(null, 'Pintura com giz/lápis de cor'),
	(null, 'Estilos famosos');

select * from estilo;
select * from comentario;

-- select qtde usuários que preferem cada estilo
select count(idUsuario) from usuario where fkEstilo = 1;

SELECT comentario.*, usuario.nome 
FROM comentario 
	JOIN usuario
    ON fkUsuario = idUsuario
    WHERE fkSecao = 1;