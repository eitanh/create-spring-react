package com.securegion.controller;

import com.securegion.model.Device;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

/**
 * Created by master on 30/05/2017.
 */
@RestController
public class Test {


    @RequestMapping("/test1")
    public String test1() {
        return "Hello";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/devices")
    public
    @ResponseBody
    List<Device> devices() {
        return Arrays.asList(
                Device.builder().name("Device 1").build(),
                Device.builder().name("Device 2").build(),
                Device.builder().name("Device 3").build(),
                Device.builder().name("Device 4").build()
        );
    }
}