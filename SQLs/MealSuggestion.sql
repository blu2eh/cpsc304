create table "MealSuggestion"
(
    "MealID"  NUMBER not null
        constraint MEALSUGGESTION_PK
            primary key,
    "Recipes" VARCHAR2(300)
)
/


