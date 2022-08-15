package WCCI.FinalProject.CookThis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class SiteUser {
    @Id
    @GeneratedValue
    private Long id;
    private String userName;
    private String emailAddress;
    private String password;
    private String firstName;
    private String lastName;
//    private LocalDate birthDate;
    @ManyToMany
    private Collection<Recipe> favoriteRecipes;

    public SiteUser(String userName, String emailAddress, String password, String firstName, String lastName) {
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteRecipes = new ArrayList<>();
    }

    public SiteUser() {
    }

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void changePassword(String newPassword){ password = newPassword; };

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Collection<Recipe> getFavoriteRecipes() {
        return favoriteRecipes;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SiteUser user = (SiteUser) o;
        return Objects.equals(id, user.id) && Objects.equals(userName, user.userName) && Objects.equals(emailAddress, user.emailAddress) && Objects.equals(password, user.password) && Objects.equals(firstName, user.firstName) && Objects.equals(lastName, user.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, emailAddress, password, firstName, lastName);
    }

    public void addFavoriteRecipe(Recipe recipeToAdd) {
        favoriteRecipes.add(recipeToAdd);
    }
}
