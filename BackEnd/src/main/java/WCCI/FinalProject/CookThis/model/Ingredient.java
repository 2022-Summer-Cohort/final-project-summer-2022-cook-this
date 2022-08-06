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
    private String measurement;

    private String description;

    private int spiceLevel;

    private boolean spicy;
    @ManyToMany
    private Collection<Recipe> recipes;


    public Ingredient(String name, String imageUrl, String measurement, String description, int spiceLevel, boolean spicy,Recipe ... recipes) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.measurement = measurement;
        this.description = description;
        this.spiceLevel = spiceLevel;
        this.spicy = spicy;
        this.recipes = Arrays.asList(recipes);
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

    public String getMeasurement() {
        return measurement;
    }

    public String getDescription() {
        return description;
    }

    public int getSpiceLevel() {
        return spiceLevel;
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
        return spiceLevel == that.spiceLevel && spicy == that.spicy && Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(imageUrl, that.imageUrl) && Objects.equals(measurement, that.measurement) && Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, imageUrl, measurement, description, spiceLevel, spicy);
    }

}


