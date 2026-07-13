"""Functions to prevent a nuclear meltdown."""


def is_criticality_balanced(temperature, neutrons_emitted):
    """Verify criticality is balanced.

    Parameters:
        temperature (int or float): The temperature value in kelvin.
        neutrons_emitted (int or float): The number of neutrons emitted per second.

    Returns:
        bool: Is criticality balanced?

    Note:
        A reactor is said to be balanced in criticality if it satisfies the following conditions:
            - The temperature is less than 800 K.
            - The number of neutrons emitted per second is greater than 500.
            - The product of temperature and neutrons emitted per second is less than 500000.

    """
    criticality = 0
    threshold = 500000
    if temperature >= 800 or neutrons_emitted <= 500:
        return False
        
    criticality = temperature * neutrons_emitted
    case1 = criticality < threshold
    return case1
    


def reactor_efficiency(voltage, current, theoretical_max_power):
    """Assess reactor efficiency zone.

    Parameters:
        voltage (int or float): Voltage value.
        current (int or float): Current value.
        theoretical_max_power (int or float): The power level that corresponds to a 100% efficiency.

    Returns:
        str: One of ('green', 'orange', 'red', or 'black').

    Note:
        Efficiency can be grouped into 4 bands:
            1. green -> efficiency of 80% or more,
            2. orange -> efficiency of less than 80% but at least 60%,
            3. red -> efficiency below 60%, but still 30% or more,
            4. black ->  less than 30% efficient.

        The percentage value is calculated as
        (generated power/ theoretical max power)*100
        where generated power = voltage * current
    """
    efficency = ""
    generated_power = voltage * current
    energy = (generated_power/theoretical_max_power)*100
    
    if energy >= 80:
        efficency = "green"
    elif energy < 80 and energy >= 60:
        efficency = "orange"
    elif energy < 60 and energy >=30:
        efficency = "red"
    else:
        efficency = "black"
    return efficency

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    """Assess and return status code for the reactor.

    Parameters:
        temperature (int or float): The value of the temperature in kelvin.
        neutrons_produced_per_second (int or float): The neutron flux.
        threshold (int or float): The threshold for the category.

    Returns:
        str: One of ('LOW', 'NORMAL', 'DANGER').

    Note:
        1. 'LOW' -> `temperature * neutrons per second` < 90% of `threshold`
        2. 'NORMAL' -> `temperature * neutrons per second` +/- 10% of `threshold`
        3. 'DANGER' -> `temperature * neutrons per second` is not in the above-stated ranges
    """
    fail_value = temperature * neutrons_produced_per_second
    fail_range_90 = threshold * 0.9
    fail_range_110 = threshold * 1.1
    
    if fail_value < fail_range_90:
        return "LOW"
    elif fail_value > fail_range_110:
        return "DANGER"
    elif fail_value >= fail_range_90 or fail_value <= fail_range_110 :
        return "NORMAL"
