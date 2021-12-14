package com.example.demo.service;


import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.model.TodoEntity;


@Service
public class TodoService {

	public String testService() {
		return "TEST SERVICE";
	}
	
}
