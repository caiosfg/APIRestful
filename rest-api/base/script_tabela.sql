CREATE TABLE portifolio (
  idportifolio INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  num_processo INTEGER UNSIGNED  NOT NULL  ,
  comarca VARCHAR(20)  NULL ,
  vara VARCHAR(255)  NULL  ,
  acao VARCHAR(45)  NULL  ,
  data_abertura DATE  NULL  ,
  valor_causa DECIMAL  NULL  ,
  escritorio VARCHAR(45)  NULL  ,
  data_fim DATE  NULL    ,
PRIMARY KEY(idportifolio));







