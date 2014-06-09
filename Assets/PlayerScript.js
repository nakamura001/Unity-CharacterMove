@script RequireComponent(CharacterController)

private var moveDirection : Vector3 = Vector3.zero;
var gravity : float = 20.0;

function Start() {
	animation.Play("idle");
}

function FixedUpdate() {
	var inputH : boolean = false;
	var inputV : boolean = false;

	controller = GetComponent(CharacterController);
	moveDirection = Vector3.zero;
	moveDirection.y -= gravity;
	
	if (Mathf.Abs(Input.GetAxisRaw("Horizontal")) > 0.5) {
		inputH = true;
		transform.eulerAngles.y += Input.GetAxis("Horizontal") * Time.deltaTime * 100;
	}
	if (Mathf.Abs(Input.GetAxisRaw("Vertical")) > 0.5) {
		inputV = true;
		moveDirection += transform.forward * 2;
	}
	
	controller.Move(moveDirection*Time.deltaTime);
	
	if (inputH || inputV) {
		animation.CrossFade("walk");
	} else {
		animation.CrossFade("idle");
	}
}