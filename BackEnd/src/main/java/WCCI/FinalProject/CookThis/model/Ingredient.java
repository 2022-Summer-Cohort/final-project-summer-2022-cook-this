package WCCI.FinalProject.CookThis.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    private String imageUrl;

    private String description;

    private String ingredientMeasurement;

    private int spiceLevel;

    private boolean spicy;
    @ManyToMany
    @JsonIgnore
    private Collection<Recipe> recipes;

    @ManyToMany(mappedBy = "ingredients")
    private Collection<Measurement> measurements;

    public Ingredient(String name, String imageUrl, String description, int spiceLevel, boolean spicy,Recipe... recipes) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.spiceLevel = spiceLevel;
        this.spicy = spicy;
        this.recipes = Arrays.asList(recipes);
        this.measurements = new ArrayList<>();
    }



    public Ingredient() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }


    public String getDescription() {
        return description;
    }

    public int getSpiceLevel() {
        return spiceLevel;
    }

    public Collection<Measurement> getMeasurements() {
        return measurements;
    }

    public void setRecipes(Collection<Recipe> recipes) {
        this.recipes = recipes;
    }

    public boolean isSpicy() {
        return spicy;
    }

    public Collection<Recipe> getRecipes() {
        return recipes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ingredient that = (Ingredient) o;
        return spiceLevel == that.spiceLevel && spicy == that.spicy && Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(imageUrl, that.imageUrl) && Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, imageUrl, description, spiceLevel, spicy);
    }

//    public void updateMeasurement(Long recId, Long measId) {
//        for(Recipe recipe: recipes){
//            for(Measurement measurement: measurements){
//                if(recipe.getId()==recId && measurement.getId()==measId){
//                    ingredientMeasurement = measurement.getAmount() + " " + measurement.getType();
//                }
//            }
//        }
//    }
}


