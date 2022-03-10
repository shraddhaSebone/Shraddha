package hello;
import java.util.*;
public class palidrome {

	public void palindrome_no(int num){
	int sum=0,r,temp;
	    temp =num;
		while(num>0) {
			r =num%10;
			sum =(sum*10)+r;
			num=num/10;	
		}
		if(sum==temp) 
		 System.out.println("no is palindrome");
		 else
			 System.out.println("no is not palindrome");
		 
		}

public static void main(String[] args) {
	
		Scanner scan =new Scanner(System.in);
		System.out.println("enter the num");
		int num = scan.nextInt();
		palindrome p = new palindrome();
		p.palindrome_no(num);
	}
}
