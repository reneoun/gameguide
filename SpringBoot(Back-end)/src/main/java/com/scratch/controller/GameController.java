package com.scratch.controller;

import com.scratch.controller.viewmodel.GameViewModel;
import com.scratch.doa.GameDoa;
import com.scratch.model.Game;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping(path = "/game")
@CrossOrigin
public class GameController {

    @Autowired
    GameDoa gameDoa;

    @GetMapping
    public String check(){
        return "Jeuw Sweq";
    }

    @GetMapping(path = "/all")
    public List<Game> getAllGames(){
        return gameDoa.getAllGames();
    }

    @GetMapping(path = "/byID")
    public Game getGameByID(@RequestParam String id){
        return gameDoa.getGameById(id);
    }

    @PostMapping(path = "/addGame")
    public void addGame(@RequestBody GameViewModel gameViewModel, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new ValidationException();
        }

        this.gameDoa.addGame(
                gameViewModel.getNames(),
                gameViewModel.getShort_desc(),
                gameViewModel.getImage_url()
        );
    }
}
