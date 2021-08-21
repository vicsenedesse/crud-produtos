
package com.crud.produtos.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.crud.produtos.controller.dto.ProdutoRq;
import com.crud.produtos.controller.dto.ProdutoRs;
import com.crud.produtos.model.Produto;
// import com.crud.produtos.repository.ProdutoCustomRepository;
import com.crud.produtos.repository.ProdutoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/produto") 
@CrossOrigin(origins = "http://localhost:4200")
public class ProdutoController {

    private final ProdutoRepository produtoRepository;

    public ProdutoController(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/") 
    public List<ProdutoRs> findAll() {
        var produtos = produtoRepository.findAll();
        return produtos
                .stream()
                .map(ProdutoRs::converter)
                .collect(Collectors.toList());
    }




    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}") 
    public ProdutoRs findByProdutoId(@PathVariable("id") Long id) {
        var produto = produtoRepository.getOne(id);
        return ProdutoRs.converter(produto);
    }




    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/produto")  
    public ResponseEntity<String> savePerson(@RequestBody ProdutoRq produto) {
        var t = new Produto();

        t.setDescricao(produto.getDescricao());
        t.setData(produto.getData());
        t.setPreco(produto.getPreco());
        t.setCategoria(produto.getCategoria());
        

        produtoRepository.save(t);
        return ResponseEntity.ok("Sucesso!");
//        return Exception();
    }



    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/{id}") 
    public void updatePerson(@PathVariable("id") Long id, @RequestBody ProdutoRq produto) throws Exception {
        var t = produtoRepository.findById(id);

        if (t.isPresent()) {
            var produtoSave = t.get();
            produtoSave.setDescricao(produto.getDescricao());
            produtoSave.setData(produto.getData());
            produtoSave.setPreco(produto.getPreco());
            produtoSave.setCategoria(produto.getCategoria());

            produtoRepository.save(produtoSave);
        } else {
            throw new Exception("Produto Não encontrado");
        }
    }



    @DeleteMapping(path ={"/{id}"})
    public ResponseEntity <?> delete(@PathVariable long id) {
       return produtoRepository.findById(id)
               .map(record -> {
                   produtoRepository.deleteById(id);
                   return ResponseEntity.ok().build();
               }).orElse(ResponseEntity.notFound().build());
    }



    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/filter") 
    public List<ProdutoRs> findPersonByCategoria(@RequestParam("categoria") String categoria) {
        return this.produtoRepository.findByCategoriaContains(categoria)
                .stream()
                .map(ProdutoRs::converter)
                .collect(Collectors.toList());
    }

}