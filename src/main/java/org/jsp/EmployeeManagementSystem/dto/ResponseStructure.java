package org.jsp.EmployeeManagementSystem.dto;

public class ResponseStructure<T> {

		private String message;
		private T body;
		private int code;
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public T getBody() {
			return body;
		}
		public void setBody(T object) {
			this.body = object;
		}
		public int getCode() {
			return code;
		}
		public void setCode(int code) {
			this.code = code;
		}
			
		

	}



