package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.UserServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserServiceImpl userService;

    @GetMapping
    public ResponseEntity<List<Users>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Users> getUser(@PathVariable(value = "userId") Integer userId) {
        return ResponseEntity.ok().body(userService.getUserById(userId));
    }

    @PostMapping
    public ResponseEntity<Users> addAdminUser(@RequestBody Users user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/auth").toUriString());
        return ResponseEntity.created(uri).body(userService.insertUser(user));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@RequestBody @PathVariable(value = "userId") Integer userId) {
        userService.deleteUserById(userId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{userId}")
    public ResponseEntity<Users> updateUser(@PathVariable(value = "userId") Integer userId, @RequestBody Users user) {
        return ResponseEntity.ok().body(userService.updateUser(userId, user));
    }

}
