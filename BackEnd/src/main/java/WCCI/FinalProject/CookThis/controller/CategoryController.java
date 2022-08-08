package WCCI.FinalProject.CookThis.controller;

import WCCI.FinalProject.CookThis.model.Category;
import WCCI.FinalProject.CookThis.repository.CategoryRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import com.sun.xml.bind.XmlAccessorFactory;
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
    public Iterable<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    @GetMapping("api/categories/{id}")
    public Category getCategoryById(@PathVariable Long id) {
        return categoryRepo.findById(id).get();
    }


//    @GetMapping("api/categories/{id}")
//    public Category getCategoryById(@PathVariable Long Id){
//        return categoryRepo.findById(Id).get();
//    }


//    @PostMapping("api/category/newCategory")
//    public Category categoryToAddImg(@PathVariable Long Id){
//        Category categoryToAdd = categoryRepo.findById(Id).get();
//        categoryToAdd.addCategoryImgUrl();
}


