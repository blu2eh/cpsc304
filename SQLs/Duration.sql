create table "Duration"
(
    "ItemID"          NUMBER       not null
        constraint "Duration_ItemID"
            references "FoodItem",
    "CompartmentName" VARCHAR2(50) not null
        constraint  "Duration_CompartmentName_fk"
            references "Temperature",
    "DurationInDays"  NUMBER       not null

)
/

create unique index DURATION_PK
    on "Duration" ("ItemID")
/


