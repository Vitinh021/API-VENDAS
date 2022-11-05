create schema base;

create table base.loja (
    lojaID serial primary key,
    nome text not null
);

create table base.modalidade (
    modalidadeID serial primary key,
    tipo text not null
);

create table base.venda (
    vendaId serial primary key,
    numCartao int not null,
    valBruto float not null,
    numParcela int not null,
    bandeira text not null,
    modalidadeId serial,
    lojaId serial,
    data timestamp default now(),
    foreign key(modalidadeId) references base.modalidade (modalidadeID),
    foreign key(lojaID) references base.loja (lojaID)
);

insert into base.modalidade (tipo) values ('Débito');
insert into base.modalidade (tipo) values ('Crédito');

