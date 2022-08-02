package WCCI.FinalProject.CookThis.controller;

import WCCI.FinalProject.CookThis.model.Category;
import WCCI.FinalProject.CookThis.model.Recipe;
import WCCI.FinalProject.CookThis.model.Review;
import WCCI.FinalProject.CookThis.repository.CategoryRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



public class RecipeController {
    private CategoryRepo categoryRepo;
    private RecipeRepo recipeRepo;

    public RecipeController(CategoryRepo categoryRepo, RecipeRepo recipeRepo) {
        this.categoryRepo = categoryRepo;
        this.recipeRepo = recipeRepo;
    }

    @GetMapping("api/recipes")
    public Iterable<Category> getAllCategories(){
        return categoryRepo.findAll();
    }

    @GetMapping("api/recipes/{id}")
    public Category getCategoryById(@PathVariable Long Id){
        return categoryRepo.findById(Id).get();
    }

    @PostMapping("api/recipes/{id}/addComment")
    public Recipe recipeToAddCommentTo(@RequestBody Review newComment, @PathVariable Long id) {
        Recipe recipeToChange = recipeRepo.findById(id).get();
//        Comment commentToAdd = new Comment(newComment);
        recipeToChange.addComments(newComment);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }

    }
