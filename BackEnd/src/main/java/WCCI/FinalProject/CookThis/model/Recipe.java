package WCCI.FinalProject.CookThis.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.aspectj.apache.bcel.generic.Instruction;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Recipe {

    private long id;

    @ElementCollection
    private Collection<Step> steps;

    private String picOfDish;
    @ManyToMany
    @JsonIgnore
    private Collection<Category> categories;
  @ElementCollection
  private Collection<Ingredient> ingredients;

  @ElementCollection
  private Collection<Comment> comments;

    public Recipe( String picOfDish) {
        this.steps = new ArrayList<>();
        this.picOfDish = picOfDish;
        this.ingredients = new ArrayList<>();

    }

    public Recipe() {
    }

    public long getId() {
        return id;
    }

    public Collection<Step> getSteps() {
        return steps;
    }

    public String getPicOfDish() {
        return picOfDish;
    }

    public Collection<Category> getCategories() {
        return categories;
    }

    public Collection<Ingredient> getIngredients() {
        return ingredients;
    }

    public Collection<Comment> getComments() {
        return comments;
    }
}
