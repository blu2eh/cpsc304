create table "Obtains"
(
    "UserID"   NUMBER not null
         constraint "Obtains_UserID_fk"
             references "User",
    "GroceryList#"   NUMBER not null
         constraint "Obtains_GroceryList#_fk"
             references "GroceryList",
         constraint "Obtains_PK"
             primary key ("UserID", "GroceryList#")

)
/
