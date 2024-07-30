// Classe base Document
class Document {
    print() {
       
    }
}

// Subclasse WordDocument que herda de Document
class WordDocument extends Document {
    print() {
        console.log("Printing Word document...");
    }
}

// Subclasse PDFDocument que herda de Document
class PDFDocument extends Document {
    print() {
        console.log("Printing PDF document...");
    }
}

// Testando o polimorfismo
const documents = [
    new WordDocument(),
    new PDFDocument()
];

documents.forEach(document => {
    document.print();
});
