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

select * from estilo;

-- select qtde usuários que preferem cada estilo
select count(idUsuario) from usuario where fkEstilo = 1;