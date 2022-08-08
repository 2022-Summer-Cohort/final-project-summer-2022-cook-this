package WCCI.FinalProject.CookThis.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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

//TODO Constructor needs to be updated with new field;
    public Ingredient(String name, String measurement) {
        this.name = name;
        this.measurement = measurement;
    }



    public Ingredient() {
    }

    public String getName() {
        return name;
    }

    public String getMeasurement() {
        return measurement;
    }

    public boolean spicy(){
        return(spiceLevel >0);
    }
}


