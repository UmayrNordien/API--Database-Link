This the README.TXT

It is the rad team of Konke JeffRicardo Malindi and Umayr Nordien

Clever Cloud - Konke Malindi is responsible for that
*db.config.js* - require('dotenv').config()

                module.exports = {
                    HOST: process.env.HOST,
                    USER: process.env.USER,
                    PASSWORD: process.env.PASSWORD,
                    DB: process.env.DB
                };

*.env* - HOST = "bsdkmijrzu8fh4ro9c0a-mysql.services.clever-cloud.com"
         USER = "u51scgebbwkh2hl9"
         PASSWORD = "h4bWUYeg0U8Jo3Rdw4jp"
         DB = "bsdkmijrzu8fh4ro9c0a"

*routes* - router.post("/", tutorials.create);  

           router.get("/", tutorials.findAll); 

           router.get("/published", tutorials.findAllPublished);
  
           router.get("/:id", tutorials.findOne);
  
           router.put("/:id", tutorials.update);
  
           router.delete("/:id", tutorials.delete);
  
           router.delete("/", tutorials.deleteAll);


