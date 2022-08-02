package WCCI.FinalProject.CookThis.controller;

import WCCI.FinalProject.CookThis.model.Category;
import WCCI.FinalProject.CookThis.repository.CategoryRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.web.bind.annotation.*;

@RestController
public class CategoryController {
    private CategoryRepo categoryRepo;
    private RecipeRepo recipeRepo;

    public CategoryController(CategoryRepo categoryRepo, RecipeRepo recipeRepo) {
        this.categoryRepo = categoryRepo;
        this.recipeRepo = recipeRepo;
    }

    @GetMapping("api/categories")
        public Iterable<Category> getAllCategories(){
        return categoryRepo.findAll();
    }

    @GetMapping("api/categories/{id}")
    public Category getCategoryById(@PathVariable Long id){
        return categoryRepo.findById(id).get();
    }


//    @GetMapping("api/categories/{id}")
//    public Category getCategoryById(@PathVariable Long Id){
//        return categoryRepo.findById(Id).get();
//    }



//    @PostMapping("api/categories/{Id}/addImgUrl")
//    public Category categoryToAddImg(@PathVariable Long Id){
//        Category categoryToAdd = categoryRepo.findById(Id).get();
//        categoryToAdd.addCategoryImgUrl();
//    }

}
