package WCCI.FinalProject.CookThis.controller;

import WCCI.FinalProject.CookThis.model.Recipe;
import WCCI.FinalProject.CookThis.model.SiteUser;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import WCCI.FinalProject.CookThis.repository.SiteUserRepo;
import org.springframework.web.bind.annotation.*;

@RestController
public class SiteUserController {
    private SiteUserRepo siteUserRepo;
    private RecipeRepo recipeRepo;

    public SiteUserController(SiteUserRepo siteUserRepo, RecipeRepo recipeRepo) {
        this.siteUserRepo = siteUserRepo;
        this.recipeRepo = recipeRepo;
    }
    @GetMapping("api/users")
    public Iterable<SiteUser> getAllSiteUsers() {
        return siteUserRepo.findAll();
    }
    @GetMapping("api/users/login")
    public Boolean isUserValid(@RequestBody SiteUser siteUserToValidate){
        for(SiteUser siteUser: siteUserRepo.findAll()){
            if((siteUser.getUserName() == siteUserToValidate.getUserName() || siteUser.getEmailAddress() == siteUserToValidate.getUserName()) && siteUser.getPassword() == siteUserToValidate.getPassword()){
                return true;
            }
        }
        return false;
    }
    @GetMapping("api/users/{userName}")
    public SiteUser getSiteUserByUserName(@PathVariable String userName) {
        return siteUserRepo.findByUserNameIgnoreCase(userName);
    }

    @PostMapping("api/users/addNewUser")
    public SiteUser addNewSiteUser(@RequestBody SiteUser newSiteUser) {
        siteUserRepo.save(newSiteUser);
        return newSiteUser;
    }
    @DeleteMapping("api/users/{id}/deleteUser")
    public void deleteSiteUser(@PathVariable Long id) {
        siteUserRepo.deleteById(id);
    }


}
