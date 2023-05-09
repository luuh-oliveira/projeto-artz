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
    
select * from estilo;