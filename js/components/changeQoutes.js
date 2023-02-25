export function changeQuotes() {
    const quotesBtn = document.querySelector('.change-quote');

    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');

    const quotes = [
        {
          "text": "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
          "author": "Стив Макконнелл"
        },
        {
          "text": "Сложность программы растет до тех пор, пока не превысит способности программиста",
          "author": "Артур Блох. Законы Мэрфи"
        },
          {
          "text": "Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
          "author": "И. Берард"
        },
      ]

    quotesBtn.addEventListener('click', function(){
        let random = Math.floor(Math.random() * quotes.length);

        quote.innerHTML = quotes[random].text;
        author.innerHTML = quotes[random].author;
    });
};