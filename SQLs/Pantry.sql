create table "Pantry"
(
    "DeviceID"   NUMBER not null
        constraint PANTRY_PK
            primary key
        constraint PANTRY_STORAGEDEVICE__FK
            references "StorageDevice",
    "PantryName" VARCHAR2(100)
)
/

create unique index PANTRY_PANTRYNAME_UINDEX
    on "Pantry" ("PantryName")
/


