create table "Refrigerator"
(
    "DeviceID" NUMBER not null
        constraint REFRIGERATOR_PK
            primary key
        constraint REFRIGERATOR_STORAGEDEVICE__FK
            references "StorageDevice",
    "Serial#"  VARCHAR2(255),
    "Brand"    VARCHAR2(100),
    "Model#"   NUMBER
)
/

create unique index REFRIGERATOR_MODEL#_UINDEX
    on "Refrigerator" ("Model#")
/

create unique index REFRIGERATOR_SERIAL#_UINDEX
    on "Refrigerator" ("Serial#")
/


