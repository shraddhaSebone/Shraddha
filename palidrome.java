package hello;
import java.util.*;
public class palidrome {

	public static void main(String[] args) {
	  Scanner sc=new Scanner(System.in);
	  System.out.println("Enter a Number");
	  int num=sc.nextInt();
	  int temp=num;
	  int rev=0;
	  int sum=0;
	    while(num > 0)
	    {
	    	rev=num % 10;
	        sum=sum*10 + rev;
	        num=num/10;
	    }
	    if(temp == sum) {
	    	System.out.println(temp +" is Palidrome");
	    }
	    else {
	    	System.out.println(temp +" Not Palidrome");
	    }
	}
}
