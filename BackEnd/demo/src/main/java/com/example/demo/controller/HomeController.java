package com.example.demo.controller;

import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Api(tags = {"테스트용..."})
public class HomeController {
	private final Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());
	@GetMapping("home")
	public String home() {
		log.trace("trace message");
		log.debug("debug message");
		log.info("info message"); // default
		log.warn("warn message");
		log.error("error message");
		return "home.html";
	}

}
