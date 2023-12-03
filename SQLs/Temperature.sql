create table "Temperature"
(
    "CompartmentName" VARCHAR2(50) not null,
    "Temperature"     FLOAT        not null,
    constraint TEMPERATURE_PK
        primary key ("CompartmentName")
)

/


